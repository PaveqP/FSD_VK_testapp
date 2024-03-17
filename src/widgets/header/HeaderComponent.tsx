import React from 'react'
import { Title, Image, Button, Separator } from '@vkontakte/vkui';
import { Link } from 'react-router-dom';
import '@vkontakte/vkui/dist/vkui.css';
import './Header.scss'

function HeaderComponent() {
  return (
    <header className='header'>
        <div className="header__row">
            <div className="row__primary">
              <Image src={require('../../shared/images/logo.png')} size={50} className='row__image'/>
              <Title>
                <p>Test App by </p>
                <a href="https://github.com/PaveqP" target="_blank">
                    Pavel
                </a>
              </Title>
            </div>
            <div className="header__navigation">
                <Link to='/'><Button className='navigation-task'>Task_1</Button></Link>
                <Link to='/2'><Button className='navigation-task'>Task_2</Button></Link>
            </div>
        </div>
        <Separator />
    </header>
  )
}

export {HeaderComponent}
