import { Component } from "react";
export class List extends Component{

    state = {
        lineInput: "",
        myList: []
    }
   
    fCross(event) {
        const li=event.target;
        li.classList.toggle("crossed");
    }

    funOnChange = (e) => {
        this.setState({lineInput: e.target.value});
    }

    funAdd (input) {
        if (input===""){
            alert("Пожалуйста, введите строку")
        }
        else {
            let listAr = this.state.myList;
            listAr.push(input);
            this.setState({ myList: listAr, lineInput: ""});
        }
    }

    funDelete(input) {
        let listAr = this.state.myList;
        listAr = [];
        this.setState ({myList: listAr});
    }

    fSubmit(e) {
        e.preventDefault();
    }

render() {
    return(
        <div>
            <form onSubmit={this.fSubmit}>
                <div className='content'>
                    <input 
                    type="text"
                    placeholder="Напишите, что вы хотите добавить в список"
                    onChange={this.funOnChange}
                    value={this.state.lineInput} />
                </div>
                <div className='content'>
                    <button className="add" onClick={() => this.funAdd(this.state.lineInput) }>Добавить</button>
                </div>
                <ul>
                    {this.state.myList.map((item, index) => (<li className="simpleList" key={index} onClick={this.fCross}>
                    {/* <img src={this.state.image} width="30px" alt="added"/> */}
                    {item}</li>))}
                </ul>
                <div className='content'>
                    <button className="delete" onClick={ () => this.funDelete() }>Очистить</button>
                </div>
            </form> 
         </div>
    )
}
}