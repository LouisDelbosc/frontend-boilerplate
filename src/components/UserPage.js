import React from 'react';
import UserForm from './UserForm';
import MachineList from './MachineList';
import Membership from './Membership';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore'

var UserPage = React.createClass({

    /*
     * Getting stuff from OUTSIDE of the component
     */
    // getting state from UserStore
    getInitialState: function() {
        var _infoUser = UserStore.getInfoUser();
        var _infoMachine = UserStore.getInfoMachine();
        return {
            infoUser: _infoUser,
            infoMachine: _infoMachine
        };
    },

    // Pass the responsabilité to the store via the action
    handleSubmit() {
        console.log('UserPage');
        UserActions.submitState(this.state.infoUser);
    },

    /*
     * INSIDE the component
     */
    // Change the state of the input related
    handleChangeForm(event) {
        // Create a temporary state to replace the old one
        var tmpState = this.state.infoUser;
        tmpState[event.target.id] = event.target.value;
        this.setState({
            infoUser: tmpState
        });
    },


    render() {
        return (
            <div className="userPage" >
                <UserForm info={this.state.infoUser} 
                    func={this.handleChangeForm}
                    submit={this.handleSubmit}
                />
                <MachineList info={this.state.infoMachine} />
                <Membership />
            </div>
        );
    }
});

module.exports = UserPage;
