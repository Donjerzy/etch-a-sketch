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
    const value = parseInt(prompt('Enter your prefered grid size the maximum is 72, minimum is 16.'));
    if (value && typeof value === 'number' && value < 73 && value >=16 ) {
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
    let varNum = 2;
    if (total >= 16 && total <=33) {
        varNum = 2;
    } else if (total >= 34 && total <=41) {
        varNum = 3;
    } else if (total >= 42 && total <=47) {
        varNum = 4;
    } else if (total >= 48 && total <=52) {
        varNum = 5;
    } else if (total >= 53 && total <=57) {
        varNum = 6;
    } else if (total >= 58 && total <=61) {
        varNum = 7;
    } else if (total >= 62 && total <=65) {
        varNum = 8;
    } else if (total >= 66 && total <=72) {
        varNum = 10;
    } 
    
    container.innerHTML = "";
    container.setAttribute('style', 'display:flex; flex-wrap: wrap;');
    const divSize = PAD_WIDTH / (total + varNum) ; 
    console.log(`The div size is ${divSize}`);
    for(let i = 0; i< total; i++) {
        const gridCellHorizontal = document.createElement('div');
        gridCellHorizontal.setAttribute('style', ` width:${divSize}px; border: black solid 1px; display:flex; flex-direction:column; margin-bottom:20px`);
        for(let y =0; y<total; y++) {
            const gridCellVertical = document.createElement('div'); 
            gridCellVertical.setAttribute('style', `height:${divSize}px; width:${divSize}px; border-bottom: 1px solid black;`);
            gridCellVertical.addEventListener('mouseover', ()=> {
                mode === 'color' ? gridCellVertical.style.cursor = 'default' : gridCellVertical.style.cursor = 'crosshair'
                gridCellVertical.style.backgroundColor = `${randomColorGenerator(mode)}`;
            })
            gridCellHorizontal.append(gridCellVertical);
        }
        container.append(gridCellHorizontal);
    }    
}

createGrids(16);

