import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import './Styles.css';
import { Link } from 'react-router-dom';
export default function TopNav() {
    const itemRenderer = (item) => (
        <>
            {
                item.routeUrl ? <Link className="flex align-items-center p-menuitem-link" to={item.routeUrl}>
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                </Link> : <Link className="flex align-items-center p-menuitem-link">
                    <span className={item.icon} />
                    <span className="mx-2">{item.label}</span>
                    {item.badge && <Badge className="ml-auto" value={item.badge} />}
                    {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
                </Link>
            }



        </>

    );
    const items = [
        {
            label: 'Home',
            routeUrl: '/',
            template: itemRenderer
            // icon: 'pi pi-home'
        },
        {
            label: 'Home',
            routeUrl: '/home',
            template: itemRenderer
            // icon: 'pi pi-home'
        },
        {
            label: 'Features',
            // icon: 'pi pi-star'
        },
        {
            label: 'Contact',
            // icon: 'pi pi-envelope',
            // badge: 3,
            routeUrl: '/contact',
            template: itemRenderer
        },
        {
            label: 'Login',
            // icon: 'pi pi-envelope',
            // badge: 3,
            routeUrl: '/login',
            template: itemRenderer
        }
    ];

   // const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    // const end = (
    //     <div className="flex align-items-center gap-2">
    //         <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    //         <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    //     </div>
    // );
    const start = 'Logo'
    return (
        <div className="nav-wrap navbar-fixed-top">
            {/* end={end} */}
            <div className='container'>
                <Menubar model={items} start={start} />
            </div>

        </div>
    )
}
