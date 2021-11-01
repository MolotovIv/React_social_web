import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://eksmo.ru/upload/iblock/4e9/720_1_min.jpg' alt="Roof"/>
            </div>
            <div className={classes.contentDescriptor}>
                Ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;