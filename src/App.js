import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import { lazy, Suspense } from 'react';
import { UserTemplate } from './Templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Dashboard from './pages/Admin/Dashbroad/Dashbroad';
import Films from './pages/Admin/Films/Flim';
import Edit from './pages/Admin/Films/Edit/Edit';
import ShowTime from './pages/Admin/Showtime/Showtime';
import AdminTemplate from './Templates/AdminTemplate/AdminTemplate';
import AddNewUser from './pages/Admin/Dashbroad/AddNewUser/AddNewUser';
import EditUser from './pages/Admin/Dashbroad/EditUser/EditUser';

const CheckoutTemplateLazy = lazy(() =>
  import('./Templates/CheckoutTemplate/CheckoutTemplate')
)

export const history = createBrowserHistory()


function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home}></HomeTemplate>
        <HomeTemplate path='/news' exact Component={News}></HomeTemplate>
        <UserTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path='/contact' exact Component={Contact}></HomeTemplate>
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <HomeTemplate path='/profile' exact Component={Profile} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={ShowTime} />

        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        <AdminTemplate path="/admin/users/addnewuser" exact Component={AddNewUser} />
        <AdminTemplate path="/admin/users/edit/:id" exact Component={EditUser} />

        <HomeTemplate path='/' exact Component={Home}></HomeTemplate>
        <CheckoutTemplateLazy path="/checkout/:id" exact component={Checkout} />

      </Switch>
    </Router>
  );
}

export default App;
