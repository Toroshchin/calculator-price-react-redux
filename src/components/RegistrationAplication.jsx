import React, { Component } from 'react';
import { Container, Header, Form, Input, Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { selectEducation } from '../actions/selectEducation'
import { selectTypeEducation } from '../actions/selectTypeEdication'
import { selectModuleEducation } from '../actions/selectModuleEducation'
import { readingInput } from '../actions/readingInput'
import { showModules } from '../actions/showModules'
import { resetModules } from '../actions/resetModules'
import { bindActionCreators } from 'redux';

class RegistrationAplication extends Component {
  render() {
    return (
      <Container>
        <Header as='h2' dividing children='Оформление заявки на участие' />
        <Form>
          <Form.Field>
            <label>Тип образования*</label>
            <Dropdown
              onChange={(e, data) => { this.props.selectEducation(data); this.props.showModule(); this.props.resetModules() }}
              placeholder='Выбор образования'
              search
              selection
              options={this.props.education}
            />
          </Form.Field>
          <Form.Field>
            <label>Регион*</label>
            <Dropdown
              placeholder='Выбор региона'
              fluid
              search
              selection
              options={this.props.region}
            />
          </Form.Field>
          <Form.Group grouped>
            <label>Тип образовательной организации (ОО)*</label>
            <Form.Field
              onChange={e => { this.props.selectTypeEducation(e.target.value); this.props.readingInput() }}
              value={1}
              label='ВУЗ(Программы ВО)'
              control='input'
              type='radio'
              name='typeEdication'
            />
            <Form.Field
              onChange={e => this.props.selectTypeEducation(e.target.value)}
              value={2}
              label='ВУЗ (программы СПО)'
              control='input'
              type='radio'
              name='typeEdication'
            />
            {/* <Form.Field
              onChange={e => this.props.selectTypeEducation(e.target.value)}
              value={3}
              label='ССУЗ'
              control='input'
              type='radio'
              name='typeEdication'
            /> */}

          </Form.Group>
          {this.props.showModules === true && this.props.education[this.props.activeEducation].moduleOff === true ? <Form.Group grouped>
            <label>Услуги*</label>
            {this.props.education[this.props.activeEducation].modules.map(modules => (
              <Form.Field
                onChange={(e) => this.props.selectModuleEducation(e.target.checked)}
                label={modules}
                control='input'
                type='checkbox'
                name='typeModules'
              />
            ))}
          </Form.Group>
            : ''}

          <Form.Field >
            <label>Общая численность студентов, обучающихся в ОО*</label>
            <Input type='number' onChange={e => this.props.readingInput(e.target.value)} placeholder='Введите численность студентов' />
          </Form.Field>
          <Button>Регистрация</Button>
          <label>Общая цена: {this.props.fullPrice}</label>
        </Form>

      </Container >
    );
  }
}

const mapStateToProps = (store) => {
  return {
    activeEducation: store.activeEducation,
    region: store.region,
    education: store.education,
    fullPrice: store.fullPrice,
    showModules: store.showModules
  };
};

const mapDistatchToProps = (dispatch) => {
  return bindActionCreators({
    selectEducation: selectEducation,
    selectTypeEducation: selectTypeEducation,
    selectModuleEducation: selectModuleEducation,
    readingInput: readingInput,
    showModule: showModules,
    resetModules: resetModules
  }, dispatch)
}

export default connect(mapStateToProps, mapDistatchToProps)(RegistrationAplication);