import { Component } from "react";
import './index.css'

/*class Seats extends Component{

    state={a:{0:"grey",1:"grey",2:"grey",3:'grey',4:"grey",5:"grey",6:"grey",7:'grey',8:"grey",9:"grey",10:"grey"}}

    componentDidMount(){
        this.getSeats()
    }

    getSeats=async()=>{
        const {a} = this.props
        const {tes2} = this.props
    }

    handleBoxClick = (index) => {
        this.setState((prevState) => {
          const newA = { ...prevState.a };
          newA[index] = newA[index] === 'grey' ? 'color' : 'grey';
          return { a: newA };
        });
      }

    render(){
        const {a} = this.state
        console.log(a)
        return(
            <div className="dd1">
            <div className="dd">
                {Object.keys(a).map((v,index)=>(
                    <div className={`seat ${a[index]}`} key={index}  onClick={() => this.handleBoxClick(index)}></div>
                ))}
            </div>
        </div>
        )
    }
}*/

class Seats extends Component{

    state={k:false,a:{},is1:false,is2:false,is3:false,is4:false,is5:false,is6:false,is7:false,is8:false,is9:false,is10:false,is11:false,is12:false,is13:false,is14:false,is15:false,is16:false,is17:false,is18:false,is19:false,is20:false,is21:false,is22:false,is23:false,is24:false,is25:false,is26:false,is27:false,is28:false,is29:false,is30:false,is31:false,is32:false,is33:false,is34:false,is35:false,is36:false,is37:false,is38:false,is39:false,is40:false,is41:false,is42:false,is43:false,is44:false,is45:false,is46:false,is47:false,is48:false,is49:false,is50:false}

    componentDidMount(){
        this.getSeats()
    }


    getSeats=async()=>{
        const {tes2} = this.props
        const response = await fetch(`http://localhost:3005/hollywood/seats/${tes2}`)
        const data = await response.json()
        const t1=data[0].seat1
        const t2=data[0].seat2
        const t3=data[0].seat3
        const t4=data[0].seat4
        const t5=data[0].seat5
        const t6=data[0].seat6
        const t7=data[0].seat7
        const t8=data[0].seat8
        const t9=data[0].seat9
        const t10=data[0].seat10
        const t11=data[0].seat11
        const t12=data[0].seat12
        const t13=data[0].seat13
        const t14=data[0].seat14
        const t15=data[0].seat15
        const t16=data[0].seat16
        const t17=data[0].seat17
        const t18=data[0].seat18
        const t19=data[0].seat19
        const t20=data[0].seat20
        const t21=data[0].seat21
        const t22=data[0].seat22
        const t23=data[0].seat23
        const t24=data[0].seat24
        const t25=data[0].seat25
        const t26=data[0].seat26
        const t27=data[0].seat27
        const t28=data[0].seat28
        const t29=data[0].seat29
        const t30=data[0].seat30
        const t31=data[0].seat31
        const t32=data[0].seat32
        const t33=data[0].seat33
        const t34=data[0].seat34
        const t35=data[0].seat35
        const t36=data[0].seat36
        const t37=data[0].seat37
        const t38=data[0].seat38
        const t39=data[0].seat39
        const t40=data[0].seat40
        const t41=data[0].seat41
        const t42=data[0].seat42
        const t43=data[0].seat43
        const t44=data[0].seat44
        const t45=data[0].seat45
        const t46=data[0].seat46
        const t47=data[0].seat47
        const t48=data[0].seat48
        const t49=data[0].seat49
        const t50=data[0].seat50
        const response1 = await fetch(`http://localhost:3005/hollywood/${tes2}`)
        const data1 = await response1.json()
        const e ={
            movieCoverpage:data1.movie_coverpage,
            movieName:data1.movie_name
        }
        this.setState({is1:t1,is2:t2,is3:t3,is4:t4,is5:t5,is6:t6,is7:t7,is8:t8,is9:t9,is10:t10,is11:t11,is12:t12,is13:t13,is14:t14,is15:t15,is16:t16,is17:t17,is18:t18,is19:t19,is20:t20,is21:t21,is22:t22,is23:t23,is24:t24,is25:t25,is26:t26,is27:t27,is28:t28,is29:t29,is30:t30,is31:t31,is32:t32,is33:t33,is34:t34,is35:t35,is36:t36,is37:t37,is38:t38,is39:t39,is40:t40,is41:t41,is42:t42,is43:t43,is44:t44,is45:t45,is46:t46,is47:t47,is48:t48,is49:t49,is50:t50,a:e})
    }

    Touch1=()=>{
        this.setState((prev)=>({is1:!(prev.is1)}))
    }

    Touch2=()=>{
        this.setState((prev)=>({is2:!(prev.is2)}))
    }

    Touch3=()=>{
        this.setState((prev)=>({is3:!(prev.is3)}))
    }
    Touch4=()=>{
        this.setState((prev)=>({is4:!(prev.is4)}))
    }
    Touch5=()=>{
        this.setState((prev)=>({is5:!(prev.is5)}))
    }
    Touch6=()=>{
        this.setState((prev)=>({is6:!(prev.is6)}))
    }
    Touch7=()=>{
        this.setState((prev)=>({is7:!(prev.is7)}))
    }
    Touch8=()=>{
        this.setState((prev)=>({is8:!(prev.is8)}))
    }
    Touch9=()=>{
        this.setState((prev)=>({is9:!(prev.is9)}))
    }
    Touch10=()=>{
        this.setState((prev)=>({is10:!(prev.is10)}))
    }
    Touch11=()=>{
        this.setState((prev)=>({is11:!(prev.is11)}))
    }

    Touch12=()=>{
        this.setState((prev)=>({is12:!(prev.is12)}))
    }

    Touch13=()=>{
        this.setState((prev)=>({is13:!(prev.is13)}))
    }
    Touch14=()=>{
        this.setState((prev)=>({is14:!(prev.is14)}))
    }
    Touch15=()=>{
        this.setState((prev)=>({is15:!(prev.is15)}))
    }
    Touch16=()=>{
        this.setState((prev)=>({is16:!(prev.is16)}))
    }
    Touch17=()=>{
        this.setState((prev)=>({is17:!(prev.is17)}))
    }
    Touch18=()=>{
        this.setState((prev)=>({is18:!(prev.is18)}))
    }
    Touch19=()=>{
        this.setState((prev)=>({is19:!(prev.is19)}))
    }
    Touch20=()=>{
        this.setState((prev)=>({is20:!(prev.is20)}))
    }
    Touch21=()=>{
        this.setState((prev)=>({is21:!(prev.is21)}))
    }

    Touch22=()=>{
        this.setState((prev)=>({is22:!(prev.is22)}))
    }

    Touch23=()=>{
        this.setState((prev)=>({is23:!(prev.is23)}))
    }
    Touch24=()=>{
        this.setState((prev)=>({is24:!(prev.is24)}))
    }
    Touch25=()=>{
        this.setState((prev)=>({is25:!(prev.is25)}))
    }
    Touch26=()=>{
        this.setState((prev)=>({is26:!(prev.is26)}))
    }
    Touch27=()=>{
        this.setState((prev)=>({is27:!(prev.is27)}))
    }
    Touch28=()=>{
        this.setState((prev)=>({is28:!(prev.is28)}))
    }
    Touch29=()=>{
        this.setState((prev)=>({is29:!(prev.is29)}))
    }
    Touch30=()=>{
        this.setState((prev)=>({is30:!(prev.is30)}))
    }
    Touch31=()=>{
        this.setState((prev)=>({is31:!(prev.is31)}))
    }

    Touch32=()=>{
        this.setState((prev)=>({is32:!(prev.is32)}))
    }

    Touch33=()=>{
        this.setState((prev)=>({is33:!(prev.is33)}))
    }
    Touch34=()=>{
        this.setState((prev)=>({is34:!(prev.is34)}))
    }
    Touch35=()=>{
        this.setState((prev)=>({is35:!(prev.is35)}))
    }
    Touch36=()=>{
        this.setState((prev)=>({is36:!(prev.is36)}))
    }
    Touch37=()=>{
        this.setState((prev)=>({is37:!(prev.is37)}))
    }
    Touch38=()=>{
        this.setState((prev)=>({is38:!(prev.is38)}))
    }
    Touch39=()=>{
        this.setState((prev)=>({is39:!(prev.is39)}))
    }
    Touch40=()=>{
        this.setState((prev)=>({is40:!(prev.is40)}))
    }
    Touch41=()=>{
        this.setState((prev)=>({is41:!(prev.is41)}))
    }

    Touch42=()=>{
        this.setState((prev)=>({is42:!(prev.is42)}))
    }

    Touch43=()=>{
        this.setState((prev)=>({is43:!(prev.is43)}))
    }
    Touch44=()=>{
        this.setState((prev)=>({is44:!(prev.is44)}))
    }
    Touch45=()=>{
        this.setState((prev)=>({is45:!(prev.is45)}))
    }
    Touch46=()=>{
        this.setState((prev)=>({is46:!(prev.is46)}))
    }
    Touch47=()=>{
        this.setState((prev)=>({is47:!(prev.is47)}))
    }
    Touch48=()=>{
        this.setState((prev)=>({is48:!(prev.is48)}))
    }
    Touch49=()=>{
        this.setState((prev)=>({is9:!(prev.is49)}))
    }
    Touch50=()=>{
        this.setState((prev)=>({is50:!(prev.is50)}))
    }


    onMove=async()=>{
        this.setState({k:true})
        const {tes2} = this.props
        const {is1,is2,is3,is4,is5,is6,is7,is8,is9,is10,is11,is12,is13,is14,is15,is16,is17,is18,is19,is20,is21,is22,is23,is24,is25,is26,is27,is28,is29,is30,is31,is32,is33,is34,is35,is36,is37,is38,is39,is40,is41,is42,is43,is44,is45,is46,is47,is48,is49,is50} = this.state
        const p = {is1,is2,is3,is4,is5,is6,is7,is8,is9,is10,is11,is12,is13,is14,is15,is16,is17,is18,is19,is20,is21,is22,is23,is24,is25,is26,is27,is28,is29,is30,is31,is32,is33,is34,is35,is36,is37,is38,is39,is40,is41,is42,is43,is44,is45,is46,is47,is48,is49,is50}
        const options = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(p),
        }
        console.log(tes2)
        const response = await fetch(`http://localhost:3005/hollywood/seats/${tes2}`,options)
        const data = await response.json()
    }


    render(){
        const {k,is1,is2,is3,is4,is5,is6,is7,is8,is9,is10,is11,is12,is13,is14,is15,is16,is17,is18,is19,is20,is21,is22,is23,is24,is25,is26,is27,is28,is29,is30,is31,is32,is33,is34,is35,is36,is37,is38,is39,is40,is41,is42,is43,is44,is45,is46,is47,is48,is49,is50,a} = this.state
        const {movieCoverpage,movieName} = a
        const x1 = is1?'color':null
        const x2 = is2?'color':null
        const x3 = is3?'color':null
        const x4 = is4?'color':null
        const x5 = is5?'color':null
        const x6 = is6?'color':null
        const x7 = is7?'color':null
        const x8 = is8?'color':null
        const x9 = is9?'color':null
        const x10 = is10?'color':null
        const x11 = is11?'color':null
        const x12 = is12?'color':null
        const x13 = is13?'color':null
        const x14 = is14?'color':null
        const x15 = is15?'color':null
        const x16 = is16?'color':null
        const x17 = is17?'color':null
        const x18 = is18?'color':null
        const x19 = is19?'color':null
        const x20 = is20?'color':null
        const x21 = is21?'color':null
        const x22 = is22?'color':null
        const x23 = is23?'color':null
        const x24 = is24?'color':null
        const x25 = is25?'color':null
        const x26 = is26?'color':null
        const x27 = is27?'color':null
        const x28 = is28?'color':null
        const x29 = is29?'color':null
        const x30 = is30?'color':null
        const x31 = is31?'color':null
        const x32 = is32?'color':null
        const x33 = is33?'color':null
        const x34 = is34?'color':null
        const x35 = is35?'color':null
        const x36 = is36?'color':null
        const x37 = is37?'color':null
        const x38 = is38?'color':null
        const x39 = is39?'color':null
        const x40 = is40?'color':null
        const x41 = is41?'color':null
        const x42 = is42?'color':null
        const x43 = is43?'color':null
        const x44 = is44?'color':null
        const x45 = is45?'color':null
        const x46 = is46?'color':null
        const x47 = is47?'color':null
        const x48 = is48?'color':null
        const x49 = is49?'color':null
        const x50 = is50?'color':null
        return(
        <div className="section1">
            <div>
            <img src={movieCoverpage} alt="sam" className="logo12"/>
            <h1>{movieName}</h1>
            </div>
            <div className="dd1">
                <div className="screen"></div>
            <div className="dd">
                <div className={`seat ${x1}`} onClick={this.Touch1}></div>
                <div className={`seat ${x2}`} onClick={this.Touch2}></div>
                <div className={`seat ${x3}`} onClick={this.Touch3}></div>
                <div className={`seat ${x4}`} onClick={this.Touch4}></div>
                <div className={`seat ${x5}`} onClick={this.Touch5}></div>
                <div className={`seat ${x6}`} onClick={this.Touch6}></div>
                <div className={`seat ${x7}`} onClick={this.Touch7}></div>
                <div className={`seat ${x8}`} onClick={this.Touch8}></div>
                <div className={`seat ${x9}`} onClick={this.Touch9}></div>
                <div className={`seat ${x10}`}  onClick={this.Touch10}></div>
            </div>
            <div className="dd">
                <div className={`seat ${x11}`} onClick={this.Touch11}></div>
                <div className={`seat ${x12}`} onClick={this.Touch12}></div>
                <div className={`seat ${x13}`} onClick={this.Touch13}></div>
                <div className={`seat ${x14}`} onClick={this.Touch14}></div>
                <div className={`seat ${x15}`} onClick={this.Touch15}></div>
                <div className={`seat ${x16}`} onClick={this.Touch16}></div>
                <div className={`seat ${x17}`} onClick={this.Touch17}></div>
                <div className={`seat ${x18}`} onClick={this.Touch18}></div>
                <div className={`seat ${x19}`} onClick={this.Touch19}></div>
                <div className={`seat ${x20}`}  onClick={this.Touch20}></div>
            </div>
            <div className="dd">
                <div className={`seat ${x21}`} onClick={this.Touch21}></div>
                <div className={`seat ${x22}`} onClick={this.Touch22}></div>
                <div className={`seat ${x23}`} onClick={this.Touch23}></div>
                <div className={`seat ${x24}`} onClick={this.Touch24}></div>
                <div className={`seat ${x25}`} onClick={this.Touch25}></div>
                <div className={`seat ${x26}`} onClick={this.Touch26}></div>
                <div className={`seat ${x27}`} onClick={this.Touch27}></div>
                <div className={`seat ${x28}`} onClick={this.Touch28}></div>
                <div className={`seat ${x29}`} onClick={this.Touch29}></div>
                <div className={`seat ${x30}`}  onClick={this.Touch30}></div>
            </div>
            <div className="dd">
                <div className={`seat ${x31}`} onClick={this.Touch31}></div>
                <div className={`seat ${x32}`} onClick={this.Touch32}></div>
                <div className={`seat ${x33}`} onClick={this.Touch33}></div>
                <div className={`seat ${x34}`} onClick={this.Touch34}></div>
                <div className={`seat ${x35}`} onClick={this.Touch35}></div>
                <div className={`seat ${x36}`} onClick={this.Touch36}></div>
                <div className={`seat ${x37}`} onClick={this.Touch37}></div>
                <div className={`seat ${x38}`} onClick={this.Touch38}></div>
                <div className={`seat ${x39}`} onClick={this.Touch39}></div>
                <div className={`seat ${x40}`}  onClick={this.Touch40}></div>
            </div>
            <div className="dd">
                <div className={`seat ${x41}`} onClick={this.Touch41}></div>
                <div className={`seat ${x42}`} onClick={this.Touch42}></div>
                <div className={`seat ${x43}`} onClick={this.Touch43}></div>
                <div className={`seat ${x44}`} onClick={this.Touch44}></div>
                <div className={`seat ${x45}`} onClick={this.Touch45}></div>
                <div className={`seat ${x46}`} onClick={this.Touch46}></div>
                <div className={`seat ${x47}`} onClick={this.Touch47}></div>
                <div className={`seat ${x48}`} onClick={this.Touch48}></div>
                <div className={`seat ${x49}`} onClick={this.Touch49}></div>
                <div className={`seat ${x50}`}  onClick={this.Touch50}></div>
            </div>
            <button type='button' onClick={this.onMove} className="button-confirm">Confirm</button>
            {k ? <h1 className="ff">Booking Details sent to registered mailID.</h1>:null}
            </div>
        </div>
        )
    }
}

export default Seats