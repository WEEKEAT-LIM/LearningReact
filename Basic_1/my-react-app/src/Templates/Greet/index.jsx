import styles from './Greet.module.css'
import PropTypes from 'prop-types'

function Greet(props)
{
    const welcome = <h2 className={styles.welcome}>Welcome{props.username}</h2>;
    const loginRequired = <h2 className={styles.loginRequired}>Please Log IN To Continue</h2>;
    return(props.isLoggedIn?welcome:loginRequired);
}


Greet.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

Greet.defaultProps =
{
    isLoggedIn:false,
    username:"None",
}

export default Greet