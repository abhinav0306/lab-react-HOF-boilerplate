import React from 'react'


export default class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filterUsingUserType:[],
            filterUsingFisrtLetter:[],
            filterUsingAge:[],
            totalYears:0

        }
        let filterData=this.state.userData.filter((el,i,arr)=>el.user_type=="Designer")
        this.state.filterUsingUserType=filterData
        // console.log(filterData)
        
        let ChangeName=this.state.userData.filter((el,i,arr)=>el.name.startsWith("J"))
        this.state.filterUsingFisrtLetter=ChangeName 

        let changeAge=this.state.userData.filter((el,i,arr)=>el.age>28 && el.age<=50)
        this.state.filterUsingAge=changeAge 
        // console.log(changeAge)
        let total =this.state.userData.filter((el)=>el.user_type=="Designer").reduce((acc,el,i,arr)=>{
            return acc+el.years
        },0)
        this.state.totalYears=total
    }



    render(){
        return (
            <>
            <div style={{textAlign:"center"}}>
            <h1>Dislay All Items</h1>
            <div style={{border:"2px solid black", width:"fit-content",margin:"auto",padding:"20px",color:"blue"}}>
            {this.state.userData.map((el,i,arr)=>(
                <div key={el.id} >
                     Id: {el.id} &nbsp; &nbsp; &nbsp; &nbsp;Name: {el.name} &nbsp; &nbsp;&nbsp; &nbsp; User Type: {el.user_type}
                </div>

            ))}
            </div>

            <h1>Display based on user type</h1>
            <div style={{border:"2px solid black", width:"fit-content",margin:"auto",padding:"20px",color:"blue"}}>
            {this.state.filterUsingUserType.map((el,i,arr)=>(
                <div key={el.id} >
                     Id: {el.id} &nbsp; &nbsp; &nbsp; &nbsp; Name: {el.name} &nbsp; &nbsp; &nbsp;&nbsp; User Type: {el.user_type}
                </div>
            ))}
            </div>
            


            <h1>Filter all data starting with J</h1>
            <div style={{border:"2px solid black", width:"fit-content",margin:"auto",padding:"20px",color:"blue"}}>
            {this.state.filterUsingFisrtLetter.map((el,i,arr)=>(
                <div key={el.id}>
                     Id: {el.id} &nbsp; &nbsp; &nbsp; &nbsp; Name: {el.name} &nbsp; &nbsp; &nbsp;&nbsp; User Type: {el.user_type}
                </div>
            ))}
            </div>

            <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
            <div style={{border:"2px solid black", width:"fit-content",margin:"auto",padding:"20px",color:"blue"}}>
            {this.state.filterUsingAge.map((el,i,arr)=>(
                <div key={el.id}>
                     Id: {el.id} &nbsp; &nbsp; &nbsp; &nbsp; Name: {el.name} &nbsp; &nbsp; &nbsp;&nbsp; User Type: {el.user_type}
                </div>
            ))}
            </div>
            <h1>Find the total years of the designers</h1>
            <div style={{border:"2px solid black", width:"fit-content",margin:"auto",padding:"10px",color:"blue"}}>
            <p>{this.state.totalYears}</p>
            </div>
            </div>
            </>
        )
    }
}
