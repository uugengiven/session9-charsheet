import React from 'react';

class Stat extends React.Component
{
    changetext(event) {
        this.props.vurble(this.props.name, event.target.value);
    }

    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <input type="number" onChange={this.changetext.bind(this)} className="inputBox" value={this.props.burble} /><span className="modifier">{Math.floor((this.props.burble - 10) / 2)}</span>
            </div>
        );
    }
}

export default Stat;