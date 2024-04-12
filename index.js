const container = document.querySelector('.container');
const modeBtn = document.querySelector('.mode-btn');
const gridSizeBtn = document.querySelector('.grid-btn');
let mode = 'color';
const PAD_WIDTH = 960;
const COLORS = nonRandomColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800000", // Maroon
    "#008000", // Olive
    "#000080", // Navy
    "#808000", // Olive Green
    "#800080", // Purple
    "#008080", // Teal
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#FFA500", // Orange
    "#FFFF80", // Light Yellow
    "#FFC0CB", // Pink
    "#FFD700", // Gold
    "#F0E68C", // Khaki
    "#A52A2A"  // Brown
  ];

modeBtn.addEventListener('click', ()=> {
    if(mode === 'color') {
        mode = 'erase'
        modeBtn.textContent = 'Color';
    } else {
        mode = 'color';
        modeBtn.textContent = 'Erase';
    }
});

gridSizeBtn.addEventListener('click', ()=> {
    const value = parseInt(prompt('Enter your prefered grid size the maximum is 100'));
    if (value && typeof value === 'number' && value < 101 ) {
        createGrids(value);
        gridSizeBtn.textContent = `Grid size: ${value}x${value}`;
    }  else {
        createGrids(16);
        gridSizeBtn.textContent = 'Grid size: 16x16';
    };
})

function randomColorGenerator(mode) {
    if (mode === 'erase') {
        return '#FFFFFF';
    } else {
        return COLORS[Math.floor(Math.random()* 20)];
    }
}

function createGrids(total) {
    container.innerHTML = "";
    container.setAttribute('style', 'display:flex; flex-wrap: wrap;');
    const divSize = PAD_WIDTH / (total + 1); 
    for(let i = 0; i< total; i++) {
        const gridCellHorizontal = document.createElement('div');
        gridCellHorizontal.setAttribute('style', `height:10000px width:${divSize}px; border: black solid 1px; display:flex; flex-direction:column; margin-bottom:20px`);
        for(let y =0; y< total; y++) {
            const gridCellVertical = document.createElement('div'); 
            gridCellVertical.setAttribute('style', `height:${divSize}px; width:${divSize}px; border: black solid 1px;`);
            gridCellVertical.addEventListener('mouseover', ()=> {
                gridCellVertical.style.backgroundColor = `${randomColorGenerator(mode)}`;
            })
            gridCellHorizontal.append(gridCellVertical);
        }
        container.append(gridCellHorizontal);
    }    
}

createGrids(16);

