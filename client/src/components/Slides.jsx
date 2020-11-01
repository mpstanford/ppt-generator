import pptxgen from 'pptxgenjs';
import React from 'react';
import logo from '../images/logo.png';

const Slides = (props) => {
  let pptx = new pptxgen();
  pptx.layout = "LAYOUT_4x3";
  let riskOppColor;


  for (var i = 0; i < props.data.length; i++) {
    const meeting = props.data[i].data;
    let slide = pptx.addSlide();
    slide.bkgd = 'FFFFFF';

    //Company Name
    slide.addText(meeting.companyName.toUpperCase(), {x: 0.25, y: 0.26, w: 9, h: 0.54, fontSize: 20, fontFace: 'Arial', bold: true, color: '000000'});
    slide.addShape(pptx.shapes.LINE, { x:0, y:0.84, w:"100%", h:0, line:'72706F', line_size:2.5 });

    //left rectangle
    if(meeting.riskOpp.toLowerCase().trim() === 'opportunity') {
      riskOppColor = '4F6228';
    } else {
      riskOppColor = 'C00000';
    }
    var companyDetails = [
      { text:'Website: ',   options:{bold: true} },
      { text: `${meeting.website}\n`,   options:{bold: false} },
      { text:'Concept(s): ',   options:{bold: true} },
      { text: `${meeting.concept}\n`,   options:{bold: false} },
      { text:'Met with: ',   options:{bold: true} },
      { text: `${meeting.metWith}\n`,   options:{bold: false} },
      { text: `${meeting.riskOpp}\n`,   options:{bold: true, color: riskOppColor} },
    ];

    slide.addText(companyDetails, { shape:pptx.shapes.RECTANGLE, align:'left', valign: 'top', x:0.25, y:1.09, w:3.88, h:1.7, fill:'F2F2F2', line:'7F7F7F', line_size:0.25, line_dash: 'solid', fontFace: 'Arial', fontSize: 12 });

    //right rectangle
    var keyFigures = [
      { text:'Key figures:\n',   options:{bold: true, align: 'center'} },
      { text: `${meeting.keyFigures}`, options:{bold: false, align: 'left'} },
    ];

    slide.addText(keyFigures, { shape:pptx.shapes.RECTANGLE, x:5.58, y:1.09, w:3.88, h:1.7, fill:'F2F2F2', line:'000000', valign: 'top', line_size:0.25, fontFace: 'Arial', fontSize: 12 });

    //Brief Summary
    slide.addText('Brief summary:', {x: 0.25, y: 2.92, w: 9.42, h: 0.42, fontSize: 14, fontFace: 'Arial', valign: 'bottom', bold: true, color: '000000'});
    slide.addShape(pptx.shapes.LINE, { x:0.33, y:3.33, w:9.25, h:0, line:'BFBFBF', line_size:0.75 });
    slide.addText(meeting.briefSummary, {x: 0.33, y: 3.33, w: 9.25, h: 1.11, fontSize: 12, fontFace: 'Arial', valign: 'top', bold: false, color: '000000'});

    //Main Takeaways
    slide.addText('Main takeaways:', {x: 0.25, y: 4.75, w: 9.42, h: 0.42, fontSize: 14, fontFace: 'Arial', valign: 'bottom', bold: true, color: '000000'});
    slide.addShape(pptx.shapes.LINE, { x:0.33, y:5.17, w:9.25, h:0, line:'BFBFBF', line_size:0.75 });
    slide.addText(meeting.mainTakeaways, {x: 0.33, y: 5.17, w: 9.25, h: 1.51, fontSize: 12, fontFace: 'Arial', valign: 'top', bold: false, color: '000000'});

    //Potential Connections
    slide.addText('Potential connections: ', {x: 0, y:6.81, w: 2.5, h: 0.42, fontSize: 12, fontFace: 'Arial', bold: true, color: '000000'});
    slide.addText(meeting.potentialConnections, {x: 2.25, y:6.81, w: 5.41, h: 0.42, fontSize: 12, fontFace: 'Arial', bold: false, color: '000000'});

    slide.addImage({ path: logo, x:8.53, y:7.16, w:1.27, h:0.3 });
    slide.slideNumber = { x:'50%', y:'95%', fontFace: 'Arial', fontSize: 10, color: '6D6F71' };

  }

  return (
    <div>
      <img src={logo} />
      <button onClick={() => pptx.writeFile()}>Download PPT</button>
    </div>
  );

}

export default Slides;


