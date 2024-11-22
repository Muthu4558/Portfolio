
 // Function to view PDF
 function viewPDF() {
    // Opens the PDF in a new tab
    window.open('./Resume.pdf', '_blank');
}

// Function to download PDF
function downloadPDF() {
    // Triggers the download of the PDF
    var link = document.createElement('a');
    link.href = './Resume.pdf';
    link.download = './Resume.pdf'; // Name of the file to download
    link.click();
}