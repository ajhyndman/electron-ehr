// @flow
import I from 'seamless-immutable';
import React from 'react';
import type { Immutable } from 'seamless-immutable'; // eslint-disable-line no-duplicate-imports

import Dialog from 'components/UI/Dialog';
import Input from 'components/UI/Input';
import RadioButton from 'components/UI/RadioButton';
import RadioGroup from 'components/UI/RadioGroup';
import type { Patient } from '../store';


const styles = {
  formGroup: {
    fontSize: '0.875em',
    marginBottom: '0.375em',
  },
  formInput: {
    width: '100%',
  },
};

type DefaultProps = {
  patient: Immutable<Patient>;
};

type Props = {
  onChange: Function;
  onSubmit: Function;
  open?: boolean;
  patient: Immutable<Patient>;
};

const defaultProps = {
  patient: I.from({
    address: '',
    dob: '',
    firstName: '',
    gender: 'f',
    lastName: '',
  }),
};

class PatientSettingsModal extends React.Component<DefaultProps, Props, void> {
  static defaultProps: DefaultProps;

  constructor(props: Props): void {
    super(props);

    this.changeHandlerFactory = this.changeHandlerFactory.bind(this);
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open && this.props.open === false) {
      this.refs.autoFocus.focus();
    }
  }

  props: Props;

  changeHandlerFactory: (key: string) => (value: string | number) => void;
  changeHandlerFactory(key: string): (value: string | number) => void {
    return function changeHandler(value: string | number): void {
      this.props.onChange(
        this.props.patient.set(key, value)
      );
    }.bind(this);
  }

  render(): ?React.Element<any> {
    if (!this.props.patient) {
      return undefined;
    }

    return (
      <Dialog
        open={this.props.open}
      >
        <form onSubmit={this.props.onSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '48%' }}>
              <Input
                ref="autoFocus"
                label="First Name"
                onChange={this.changeHandlerFactory('firstName')}
                type="text"
                value={this.props.patient.firstName}
              />
            </div>
            <div style={{ width: '48%' }}>
              <Input
                label="Last Name"
                onChange={this.changeHandlerFactory('lastName')}
                type="text"
                value={this.props.patient.lastName}
              />
            </div>
          </div>
          <Input
            label="Date of Birth"
            onChange={this.changeHandlerFactory('dob')}
            type="date"
            value={this.props.patient.dob}
          />
          <RadioGroup
            onChange={this.changeHandlerFactory('gender')}
            value={this.props.patient.gender}
          >
            <RadioButton label="Male" value="m" />
            <RadioButton label="Female" value="f" />
          </RadioGroup>
          <Input
            label="Address"
            onChange={this.changeHandlerFactory('address')}
            type="text"
            value={this.props.patient.address}
          />
          <div style={styles.formGroup}>
            <input style={styles.formInput} type="submit" value="SAVE" />
          </div>
        </form>
      </Dialog>
    );
  }
}

PatientSettingsModal.defaultProps = defaultProps;


export default PatientSettingsModal;
