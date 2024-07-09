import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';

import { Outlet, useNavigation } from 'react-router-dom';


export default function AppLayout() {
    const navigation = useNavigation();
    const isLoader = navigation.state === 'loading';

    return (
        <div className='layout'>
            {isLoader && <Loader />}

            <Header />

            <main>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}
