import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const doc = new jsPDF(
      {
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
       }
    );

    const width = "40px";

    const img1 = new Image();
    img1.src = "../assets/images/image1.jpg";
    document.body.appendChild(img1);
    img1.style.width = width;
    img1.style.height = "auto";
    img1.style.display = "none;"


    const img2 = new Image();
    img2.src = "../assets/images/image4.jpg";
    document.body.appendChild(img2);
    img2.style.width = width;
    img2.style.height = "auto";
    img2.style.display = "none;"


    doc.addImage(img1, "JPEG", 45, 15, img1.width, img1.height);
    doc.addImage(img2, "JPEG", 120, 15, img2.width, img2.height);

    document.body.removeChild(img1);
    document.body.removeChild(img2);

    doc.setFontSize(11);
    doc.text("Service", 55, 50);
    doc.text("Services Draeger", 130, 50);

    doc.setFontSize(13);
    autoTable(doc, {
      styles: { fillColor: [255, 255, 255] },
      theme : 'plain',
      columnStyles: {
        0: { halign: 'left', fillColor: [255, 255, 255], cellWidth: 25, lineWidth: {right: 1} },
        1: { halign: 'left', fillColor: [255, 255, 255], cellWidth: 50, lineWidth: {right: 1} },
        2: { halign: 'left', fillColor: [255, 255, 255], cellWidth: 38 },
        3: { halign: 'left', fillColor: [255, 255, 255], cellWidth: 38 },
        4: { halign: 'left', fillColor: [255, 255, 255], cellWidth: 38 }
      },
      body: [
        [{ content: 'Technical Theme', colSpan: 5, styles: { fontSize: 15, fillColor: [230, 230, 230] }}],
        ['Structure',
          'Structured offering including broad portfolio of Third party devices, tested and validated by engineers in the monitoring BU.',
          'david@example.com',
          'No information found on the website. Unlikely to have such a service.',
          'Sweden sd sfsdfsdfsfsf'
        ],
        ['Focus',
          'In addition to structured bundles, offers an excel programme for truly bespoke customer projects and follow ups.',
          'Yes, all offering seems to be bespoke consultative bespoke projects.',
          'No information found on the website. Unlikely to have such a service.',
          'Sweden sd sfsdfsdfsfsf'
        ],
        ['Deliverables',
          'dsfsdfsdfsdfsdf sdfsdfsdf sdf s df',
          'castille@example.com',
          'Spain sdfsfddfsdfs dfsd',
          'Sweden sd sfsdfsdfsfsf'
        ],
        ['Bespoke projects',
          'HL7 standard embedded in PIIC IX. IBE (Rhapsody based - most common solution) integration engine in a structured manner. IBS propietary solution to integrate third party devices.',
          'castille@example.com',
          'Spain sdfsfddfsdfs dfsd',
          'Sweden sd sfsdfsdfsfsf sdgfsdfsdfsdfsf'
        ],
        ['Tools',
          'dsfsdfsdfsdfsdf sdfsdfsdf sdf s df',
          'Ascom secondary alarm notification Airstrip patient monitoring Careescape web viewer / Mobile viewer',
          'Spain sdfsfddfsdfs dfsd',
          'Sweden sd sfsdfsdfsfsf sdgfsdfsdfsdfsf sdgfsdfsdfsdfsd'
        ]
      ],
      bodyStyles: {valign: "top"},
      startY: 60
    })

    doc.save("a4.pdf");
  }
}
