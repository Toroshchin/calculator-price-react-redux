import React, { Component } from 'react';
import { Container, Header, Form, Input, Dropdown, Button } from 'semantic-ui-react';
import { createStore } from 'redux'
import { connect } from 'react-redux'

class RegistrationAplication extends Component {
  render() {
    return (
      <Container>
        <Header as='h2' dividing children='Оформление заявки на участие' />
        <Form>
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
              label='ВУЗ'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='ССУЗ'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='ВУЗ (программы СПО)'
              control='input'
              type='radio'
              name='htmlRadios'
            />
          </Form.Group>
          <Form.Field>
            <label>Полное наименование ОО*</label>
            <Input icon='search' placeholder='Поиск ОО' />
          </Form.Field>
          <Form.Field>
            <label>Услуги*</label>
            <Form.Field
              label='студенческий режим «Обучение» и «Самоконтроль»'
              control='input'
              type='checkbox'
              name='htmlRadios'
            />
            <Form.Field
              label='преподавательский режим «Текущий контроль», включая режим «Сессия», по федеральным ПИМ'
              control='input'
              type='checkbox'
              name='htmlRadios'
            />
            <Form.Field
              label='модуль «Тест-Конструктор» и преподавательский режим «Текущий контроль», включая режим «Сессия», по ПИМ, разработанным преподавателями образовательной организации'
              control='input'
              type='checkbox'
              name='htmlRadios'
            />
          </Form.Field>

          <Form.Field >
            <label>Общая численность студентов, обучающихся в ОО*</label>
            <Input placeholder='Введите численность студентов' />
          </Form.Field>
          <Button>Регистрация</Button>

        </Form>



      </Container >
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    region: store.region,
  };
};

export default connect(mapStateToProps)(RegistrationAplication);

