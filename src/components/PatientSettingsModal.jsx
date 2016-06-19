import React from 'react';

import Dialog from 'components/UI/Dialog';
import Input from 'components/UI/Input';
import RadioButton from 'components/UI/RadioButton';
import RadioGroup from 'components/UI/RadioGroup';


const styles = {
  formGroup: {
    fontSize: '0.875em',
    marginBottom: '0.375em',
  },
  formInput: {
    width: '100%',
  },
};

class NewPatientModal extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandlerFactory = this.changeHandlerFactory.bind(this);
  }

  changeHandlerFactory(key) {
    return function changeHandler(value) {
      this.props.onChange(
        this.props.patient.set(key, value)
      );
    }.bind(this);
  }

  render() {
    return (
      <Dialog
        open
      >
        <form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '48%' }}>
              <Input
                label="First Name"
                onChange={this.changeHandlerFactory('firstName')}
                type="text"
                value={this.props.patient.get('firstName')}
              />
            </div>
            <div style={{ width: '48%' }}>
              <Input
                label="Last Name"
                onChange={this.changeHandlerFactory('lastName')}
                type="text"
                value={this.props.patient.get('lastName')}
              />
            </div>
          </div>
          <Input
            label="Date of Birth"
            onChange={this.changeHandlerFactory('dob')}
            type="date"
            value={this.props.patient.get('dob')}
          />
          <RadioGroup
            onChange={this.changeHandlerFactory('gender')}
            value={this.props.patient.get('gender')}
          >
            <RadioButton label="Male" value="m" />
            <RadioButton label="Female" value="f" />
          </RadioGroup>
          <Input
            label="Address"
            onChange={this.changeHandlerFactory('address')}
            type="text"
            value={this.props.patient.get('address')}
          />
          <div style={styles.formGroup}>
            <input style={styles.formInput} type="submit" value="SAVE" />
          </div>
        </form>
      </Dialog>
    );
  }
}

NewPatientModal.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool,
  patient: React.PropTypes.object.isRequired,
};


export default NewPatientModal;
