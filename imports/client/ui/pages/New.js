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
		'#5BC85B',
		'#FFC125',
		'#D93A32'
		],
		hoverBackgroundColor: [
		'#5BC85B',
		'#FFC125',
		'#D93A32'
		]
	}]
};
const New = () =>
  <div style={{display: 'flex',  flexWrap:'wrap',fontWeight: '700', padding: '22px'}}>

      <div style={{flex: '3', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px',  marginRight: '11px', background: "white",minWidth: '60%'}}>
          <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
            Upcoming Deadlines
          </div>
          <hr style={{marginLeft: "10px",marginRight: "10px", marginTop: '0px', border: '0px solid #ccc', height: '2px',background: '#ccc', borderRadius: '2px'}}/>
          <div style={{display: 'flex'}}>
            <div style={{ minWidth: '150px',display: 'flex', flexDirection: 'column', alignItems: 'left',justifyContent: 'center', marginLeft: '15px'}}>
              <div style={{display: 'flex',  alignItems: 'center',justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "#5BC85B",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#585858' }}>: Complete</div>
              </div>
              <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "#FFC125",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#585858' }}>: Incomplete</div>
              </div>
              <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-start',marginBottom: '10px'}}>
                <div style={{width: '20px', height: '20px',borderRadius: '30px', background: "red",marginRight: '8px'}}></div>
                  <div style={{fontWeight: '500', color: '#585858' }}>: In Progress</div>
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
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #5BC85B',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/checked.svg"/>
                    </div>
                    <div style={{fontSize: '12px', flex: '1',color: '#5BC85B'}}>Self-Assessment</div>
                    <div style={{flex: '1',height: '2px', width: '50%', background:'#5BC85B',position: 'relative', top: '-40px',marginLeft: '50%',zIndex: '2'}}></div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column',flex:'1', alignItems: 'center',justifyContent: 'center',}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '40px', height: '40px',borderRadius: '40px', border: '2px solid #007681', background: "white",marginRight: '8px',zIndex: '3'}}>
                      <div style={{color: "#007681",fontSize: '20px',fontWeight: '700'}}>2</div>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#007681'}}>Manager Assessment</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#007681',position: 'relative', top: '-40px',zIndex: '2'}}>

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
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',background:'white',borderRadius: '40px', border: '2px solid #D93A32',marginRight: '8px',zIndex: '3'}}>
                      <img style={{width: '15px'}} src="/icons/unchecked.svg"/>
                    </div>
                    <div style={{fontSize: '12px',fontWeight: '700',color: '#D93A32'}}>Meet Target</div>
                    <div style={{flex: '1',height: '2px', width: '100%', background:'#D93A32',position: 'relative', top: '-40px',zIndex: '2'}}>

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
          <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
            Upcoming Deadlines
          </div>
          <hr style={{marginLeft: "10px",marginRight: "10px", marginTop: '0px', border: '0px solid #ccc', height: '2px',background: '#ccc', borderRadius: '2px'}}/>
          <Doughnut data={data} />
      </div>
      <div style={{flex: '1', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginRight: '11px', background: "white"}}>
          <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
            Upcoming Deadlines

          </div>
          <hr style={{marginLeft: "10px",marginRight: "10px", marginTop: '0px', border: '0px solid #ccc', height: '2px',background: '#ccc', borderRadius: '2px'}}/>
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
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              12 Jan
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
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              12 Jan
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
  </div>


export default New;
