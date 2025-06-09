---
title: 'Webrogue Part 2: map generation: simplex noise with warping'
description: 'Webrogue Part 2: map generation: simplex noise with warping'
pubDate: '2025-06-08'
heroImage: '/webrogue/part2-mapgen/ss1.jpg'
demoUrl: '/'
---
<img src="/webrogue/part2-mapgen/ss1.jpg" alt="generated map with settings open"></img>
<p>
To continue our series on our new web-based roguelike project called "webrogue", we examine some of our map generation options. 
We wanted to start by generating a relatively realistic overworld map using configurable terrain types represented by ascii glyphs and colors. 

As usual, we sought to save some time by getting an AI bot to help.
</p>

<p>
Working with ChatGPT, we quickly honed in on an implementation involving simplex noise, which generated a nice looking and somewhat realistic seeming random map which reminds us a little of a contour map.

There are a lot of parameters to tweak when generating these maps to get them to look just how you want. When the space monkey saw us editing the values in source code, he said what are you doing, just make a UI to do that for so you can see what's going on. We never argue with the space monkey, so we made this tool, and decided to share it with people so they can use it, too, if they want. It's nothing special, but someone might find it useful or educational.
</p>


You can find the source code and corresponding deployment at the following links:
- [deployment](https://codemonkeyfrom-space.github.io/webrogue/mapgenDemo.html)
- [source code](https://github.com/codemonkeyfrom-space/webrogue/tree/part2-mapgen)

<br/>
If you click the "deployment" link above you should see a randomly generated map. Use the gear <img src='/webrogue/part2-mapgen/gear.jpg' alt="settings" title="settings"></img> icon at the bottom right to 
open the settings. 


Here are some examples of what a generated map looks like under various parameters.

<h3>Default Parameters</h3>

I chose the following default terrain types, in the following order, since the noise thresholds seemed to map naturally to elevations:
<ul style="font-family: courier;">
    <li>Deep water (<span style="color:blue;background-color:black;">W</span>)</li>
    <li>Shallow water (<span style="color:blue;background-color:black;">~</span>)</li>
    <li>Sand (<span style="color:yellow;background-color:black;">-</span>)</li>
    <li>Dirt (<span style="color:yellow;background-color:black;"> </span>)</li>
    <li>Gravel (<span style="color:grey;background-color:black;">.</span>)</li>
    <li>Grass (<span style="color:#0f0;background-color:black;">.</span>)</li>
    <li>Hills (<span style="color:#0f0;background-color:black;">h</span>)</li>
    <li>Mountains (<span style="color:#ddd;background-color:black;">^</span>)</li>
</ul>

The generated map has large regions of each of the above terrain types, which are generated next to each other in the same order as they are specified in the options.

<img src="/webrogue/part2-mapgen/1_1_linear-increase-threshold.jpg" alt="generated map with settings open"></img>


<h3>Simplex Base Frequency and Noise</h3>

To get a more varied landscape, we can raise the base frequency. Here it is doubled:

<img src="/webrogue/part2-mapgen/basefreq-doubled.jpg" alt="generated map with settings open"></img>







<h3>Code</h3>

There's not much code. I'm just using the library 
``` js
    private generateMap(): void {
        const tempCells: MapCell[][] = [];
        for (let y = 0; y < this.height; y++) {
        const row: MapCell[] = [];
        for (let x = 0; x < this.width; x++) {
            const terrainKey = this.generateTerrainForCell(x, y).name;
            const terrainData = this.terrainTypes[terrainKey];
            row.push(new MapCell({ ...terrainData, name: terrainKey }));
        }
        tempCells.push(row);
        }
        this.cells = tempCells;
    }

    generateTerrainForCell(x: number, y: number): TerrainType {
        const noiseValue = getNoiseValue(x, y, this.getWidth(), this.getHeight(), this.baseFreq, this.noiseMultiplier);
        const candidates = Object.values(this.terrainTypes).filter(t => t.noiseThreshold <= noiseValue);
        if (candidates.length === 0) {
        const terrain = pickTerrainFromFrequency(noiseValue, Object.values(this.terrainTypes));
        candidates.push(terrain);
        }
        candidates.sort((a, b) => b.noiseThreshold - a.noiseThreshold);
        const noiseBasedTerrain = candidates[0];
        return noiseBasedTerrain;
    }

  
    export function getNoiseValue(
        x: number, 
        y: number,
        mapWidth: number,
        mapHeight: number,
        baseFreq: number,
        noiseMultiplier: number,
        padding: number = 32,
        amplitude: number = 1,
        frequency: number = 1,
        octaves: number = 2
    ): number {
        const paddedX = (x + padding) / (mapWidth + padding * 2);
        const paddedY = (y + padding) / (mapHeight + padding * 2);
        const warpX = noise2D(paddedY * baseFreq + 800, paddedX * baseFreq + 300) * noiseMultiplier;
        const warpY = noise2D(paddedX * baseFreq + 200, paddedY * baseFreq + 1000) * noiseMultiplier;

        let value = 0;
        let max = 0;

        for (let i = 0; i < octaves; i++) {
            const nx = (paddedX + warpX) * baseFreq * frequency;
            const ny = (paddedY + warpY) * baseFreq * frequency;

            value += noise2D(nx, ny) * amplitude;
            max += amplitude;
            amplitude *= 0.5;
            frequency *= 2;
        }
        return (value / max + 1) / 2; // normalized to [0,1]
    }


```
