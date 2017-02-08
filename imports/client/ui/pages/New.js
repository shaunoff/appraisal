import React from 'react';
import {Doughnut} from 'react-chartjs-2';
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

      <div style={{flex: '3', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px',  marginRight: '11px', background: "white",minWidth: '60%'}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Upcoming Deadlines
          </div>

          <div style={{display: 'flex'}}>
            <div style={{ minWidth: '150px',display: 'flex', flexDirection: 'column', alignItems: 'left',justifyContent: 'center', marginLeft: '15px'}}>
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
            <div style={{maxWidth: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center',flex: '1'}}>
              <div style={{flex: '1', width: '200px', height: '200px'}}>
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
            <div style={{flex: "1",display: 'flex',flexDirection: 'column'}}>
              <div style={{marginBottom: '15px'}}>
                <div style={{marginLeft: '15px'}}>Appraisal Progress</div>
                <div style={{padding: '10px',display: 'flex', alignItems: 'center',  alignItems: 'center', margin: '10px',border: '2px solid #ccc',borderRadius: '8px', height: '60px'}}>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #007681',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/checked.svg"/>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#007681'}}>Self-Assessment</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#007681',position: 'relative', top: '-40px',marginLeft: '50%',zIndex: '2'}}></div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #6bada7', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#6bada7",fontSize: '20px',fontWeight: '700'}}>2</div>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#6bada7'}}>Manager Assessment</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#6bada7',position: 'relative', top: '-40px',zIndex: '2'}}>

                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #ccc', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#ccc"}}>3</div>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#ccc'}}>Feedback</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#ccc',position: 'relative', top: '-40px',marginRight: '50%',zIndex: '2'}}></div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{marginLeft: '15px'}}>Q1 Target Progress</div>
                <div style={{padding: '10px',display: 'flex', alignItems: 'center',  alignItems: 'center', margin: '10px',border: '2px solid #ccc',borderRadius: '8px', height: '60px'}}>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #5BC85B',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/checked.svg"/>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#5BC85B'}}>Set Target</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#5BC85B',position: 'relative', top: '-40px',marginLeft: '50%',zIndex: '2'}}></div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #fa7606',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/unchecked.svg"/>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#fa7606'}}>Meet Target</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#fa7606',position: 'relative', top: '-40px',zIndex: '2'}}>

                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #ccc', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#ccc"}}>3</div>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#ccc'}}>Approval</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#ccc',position: 'relative', top: '-40px',marginRight: '50%',zIndex: '2'}}></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div style={{flex: '1', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginBottom: '22px',marginLeft: '11px', background: "white",minWidth: '30%'}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Upcoming Deadlines
          </div>

          <Doughnut data={data} />
      </div>
      <div style={{flex: '1', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginRight: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Upcoming Deadlines

          </div>

          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2017 Q3 Targets
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              3 Days
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2017 Q3 Targets
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              3 Days
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2017 Q3 Targets
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              3 Days
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
          <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
            Recent Activity

          </div>
          <hr style={{marginLeft: "10px",marginRight: "10px", marginTop: '0px', border: '0px solid #ccc', height: '2px',background: '#ccc', borderRadius: '2px'}}/>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "40px",width: "40px", borderRadius: '40px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>

                <div style={{ fontSize: '16px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Shaun Hutch
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Appraisal Complete
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: warning,padding:"10px"}}>
              12 Jan
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2017 Q3 Targets
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: warning,padding:"10px"}}>
              3 Days
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '60px'}}>
            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2017 Q3 Targets
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: warning,padding:"10px"}}>
              3 Days
            </div>
          </div>
      </div>
  </div>


export default New;
