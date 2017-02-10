import React from 'react';


import { Circle } from 'rc-progress';

export default class Progress extends React.Component {
  render(){
    return(
      <div style={{width: '200px', margin: '15px', display: 'flex', flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px', background: "white",}}>






            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'left',alignItems: 'left'}}>


              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>

                  <div style={{fontSize: '18px', fontWeight: '700', color: '#007681'}}>Self Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #007681',zIndex: '3', marginRight: '8px'}}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#007681'}}>Competencies</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #007681',zIndex: '3', marginRight: '8px'}}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#007681'}}>Questions</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #007681',zIndex: '3', marginRight: '8px'}}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#007681'}}>Summary</div>
                </div>

              </div>
              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>

                  <div style={{fontSize: '18px', fontWeight: '700', color: '#007681'}}>Manager Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>1</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Competencies</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>2</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Questions</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>3</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Summary</div>
                </div>

              </div>
              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px'}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>

                  <div style={{fontSize: '18px', fontWeight: '700', color: '#007681'}}>Approval</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>1</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Feedback</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>2</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Employee Approval</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>3</div>
                  </div>
                  <div style={{fontSize: '14px', fontWeight: '500', color: '#6bada7'}}>Manager Approval</div>
                </div>

              </div>


            </div>



            



      </div>




    )
  }
}
