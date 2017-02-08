import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Line, Circle } from 'rc-progress';
const data = {
	labels: [
		'Complete',
		'Incomplete',
		'In Progress'
	],
  legend: {

  },
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#007681',
		'#6bada7',
		'#fa7606'
		],
		hoverBackgroundColor: [
		'#007681',
		'#6bada7',
		'#fa7606'
		]
	}]
};
const warning = "#fa7606"
const manager = "#6bada7"
const primary = "#007681"
const New = () =>
  <div style={{display: 'flex',  flexWrap:'wrap',fontWeight: '700', padding: '22px'}}>

      <div style={{flex: '3', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px', background: "white",minWidth: '90%'}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Appraisal Progress
          </div>

          <div style={{display: 'flex'}}>

            <div style={{flex: "1",display: 'flex',flexDirection: 'column', justifyContent:'center'}}>


                <div style={{padding: '10px',display: 'flex', alignItems: 'center',  alignItems: 'center', margin: '10px',border: '2px solid #ccc',borderRadius: '8px', height: '80px'}}>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #007681',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/checked.svg"/>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#007681'}}>Self-Assessment</div>
                    <div style={{fontSize: '12px', flex: '1',color: '#007681'}}>22nd January</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#007681',position: 'relative', top: '-50px',marginLeft: '50%',zIndex: '2'}}></div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #6bada7', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#6bada7",fontSize: '20px',fontWeight: '700'}}>2</div>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#6bada7'}}>Manager Assessment</div>
                    <div style={{fontSize: '12px', flex: '1',color: '#007681'}}>22nd January</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#6bada7',position: 'relative', top: '-50px',zIndex: '2'}}>

                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #6bada7', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#6bada7",fontSize: '20px',fontWeight: '700'}}>2</div>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#6bada7'}}>Feedback</div>
                    <div style={{fontSize: '12px', flex: '1',color: '#007681'}}>22nd January</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#6bada7',position: 'relative', top: '-50px',zIndex: '2'}}>

                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #ccc', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#ccc"}}>3</div>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#ccc'}}>Feedback</div>
                    <div style={{fontSize: '12px', flex: '1',color: '#ccc'}}>22nd January</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#ccc',position: 'relative', top: '-50px',marginRight: '50%',zIndex: '2'}}></div>
                  </div>

              </div>

            </div>
            <div style={{maxWidth: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center',flex: '1', marginBottom: '15px'}}>
              <div style={{flex: '1', width: '150px', height: '150px'}}>
                <Doughnut
                  width={0.1}
                  height={0.1}
                  data={data} options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: false
                    }
                  }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '20%',display: 'flex', flexDirection: 'column', alignItems: 'left',justifyContent: 'center', marginRight: '15px'}}>
              <div style={{display: 'flex',  alignItems: 'center',justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "#007681",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#007681' }}>: Complete</div>
              </div>
              <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "#fa7606",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#fa7606' }}>: Incomplete</div>
              </div>
              <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "#6bada7",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#6bada7' }}>: In Progress</div>
              </div>

            </div>

        </div>
      </div>



      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Recent Activity

          </div>

					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: manager, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>RG</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: manager,padding:"10px"}}>
               Roger Goudreau
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: manager, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>JG</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: manager,padding:"10px"}}>
               Jan Guy
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Final Approval
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>

      </div>
      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Completed Appraisals

          </div>

          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '90px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2016
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "12px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.2</span></div>
               <Line style={{marginBottom: '10px'}} percent="76" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
               <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.6</span></div>
              <Line style={{marginBottom: '10px'}} percent="82" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
            </div>
            <div style={{padding:"10px"}}>
              <img style={{ width: '40px'}} src="/icons/pdf.svg"/>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '80px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2015
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "12px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.6</span></div>
               <Line style={{marginBottom: '10px'}} percent="82" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
               <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.1</span></div>
              <Line style={{marginBottom: '10px'}} percent="74" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
            </div>
            <div style={{padding:"10px"}}>
              <img style={{ width: '40px'}} src="/icons/pdf.svg"/>
            </div>
          </div>





      </div>
      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Useful Links

          </div>

          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '40px'}} src="/icons/question.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Instructions
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Appraisal Policy
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Staff Handbook
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>





      </div>
  </div>


export default New;
