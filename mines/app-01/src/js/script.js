function highlightCells() {
    // Get all the cells
    const cells = document.querySelectorAll('#matrix td');
    
    // Reset all cell colors
    cells.forEach(cell => {
      cell.classList.remove('highlighted');
    });
    
    // Create a set to ensure unique random numbers
    const uniqueRandoms = new Set();
  
    while (uniqueRandoms.size < 3) {
      const randomNum = Math.floor(Math.random() * 25);
      uniqueRandoms.add(randomNum);
    }
  
    // Highlight 3 random cells
    uniqueRandoms.forEach(num => {
      cells[num].classList.add('highlighted');
    });
  }
  