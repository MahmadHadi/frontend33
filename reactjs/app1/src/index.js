/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class DinningTable extends React.Component {
    constructor(props)
    {
        super(props);
        //property variable
        this.guest = props.guest;
        this.no = props.no;
        //create state object
        this.state = {
            thali:0,
            ras:0,
            papad:0,
            roti:0,
            chas:0,
            total:0
        }
        
    }
    //create static final variable
    static get THALI_PRICE() {
        return 100;
    }
    static get ROTI_PRICE()
    {
        return 10;
    }
    static get RAS_PRICE()
    {
        return 25;
    }
    static get CHAS_PRICE()
    {
        return 15;
    }
    static get PAPAD_PRICE()
    {
        return 7;
    }

    //create event handler arrow function
    updateThali =()=>
    {
        // this.state.thali = this.state.thali + 1;
        this.setState({
            thali: this.state.thali + 1,
        });
    }
    updateRas = () =>
    {
        this.setState({
            ras: this.state.ras + 1
        });

    }
    updateRoti = () => {
        this.setState({
            roti:this.state.roti + 1
        });
    }
    updatePapad = () => {
        this.setState({
            papad: this.state.papad + 1
        });
    }
    updateChas = () => {
        this.setState({
            chas:this.state.chas + 1
        });
    }
    render() {
        return (<div className="col-lg-3 mb-3">
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between text-bg-primary">
                    <h5>{this.guest}</h5>
                    <span className="badge text-bg-secondary">{this.no}</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <button onClick={this.updateThali} type="button" className="btn btn-primary w-100">Thali <span className="badge text-bg-secondary">{this.state.thali}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button onClick={this.updateRas} type="button" className="w-100 btn btn-warning">Ras <span className="badge text-bg-secondary">{this.state.ras}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button onClick={this.updateRoti} type="button" className="w-100 btn btn-light">Roti <span className="badge text-bg-secondary">{this.state.roti}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button type="button" className="w-100 btn btn-info" onClick={this.updatePapad}>Papad <span className="badge text-bg-secondary">{this.state.papad}</span></button>
                        </div>
                        <div className="col-6 mb-2">
                            <button onClick={this.updateChas} type="button" className="w-100 btn btn-success">Chas <span className="badge text-bg-secondary">{this.state.chas}</span></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h6>Total Rs </h6>
                    <h6 className="fw-bold">{this.state.total}</h6>
                </div>
            </div>
        </div>);
    }
}
class Resturant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <DinningTable guest='Jeet Patel' no='1' />
                <DinningTable guest='Ram Patel' no='2' />
                <DinningTable guest='Geeta Patel' no='3' />
            </div>
        </div>
        );
    }
}
root.render(<Resturant />)