import React, { Component } from 'react';
import { Container, Header, Form, Input, Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { selectEducation } from '../actions/index'
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
              onChange={() => this.props.selectEducation(this.props.education[2])}
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
              label='ВУЗ(Программы ВО)'
              control='input'
              type='radio'
              name='typeEdication'
            />
            <Form.Field
              label='ВУЗ (программы СПО)'
              control='input'
              type='radio'
              name='typeEdication'
            />
            <Form.Field
              label='ССУЗ'
              control='input'
              type='radio'
              name='typeEdication'
            />

          </Form.Group>

          <Form.Field>
            <label>Услуги*</label>
            <Form.Field
              label='студенческий режим «Обучение» и «Самоконтроль»'
              control='input'
              type='checkbox'
              name='typeModules'
            />
            <Form.Field
              label='преподавательский режим «Текущий контроль», включая режим «Сессия», по федеральным ПИМ'
              control='input'
              type='checkbox'
              name='typeModules'
            />
            <Form.Field
              label='модуль «Тест-Конструктор» и преподавательский режим «Текущий контроль», включая режим «Сессия», по ПИМ, разработанным преподавателями образовательной организации'
              control='input'
              type='checkbox'
              name='typeModules'
            />
          </Form.Field>

          <Form.Field >
            <label>Общая численность студентов, обучающихся в ОО*</label>
            <Input placeholder='Введите численность студентов' />
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
    region: store.region,
    education: store.education,
    fullPrice: store.fullPrice
  };
};

const matchDistatchToProps = (dispatch) => {
  return bindActionCreators({ selectEducation: selectEducation }, dispatch)
}

export default connect(mapStateToProps, matchDistatchToProps)(RegistrationAplication);

