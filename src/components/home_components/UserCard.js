
const UserInfo = (props) => {
    let value = props.value;
    let title = props.title;
    if(title === 'Biography'){
        return(
            <div className="user-user-value">
                <p>{title}</p>
                <h3 className="add-indent">{value}</h3>
            </div>
        );
    }
    return(
        <div className="user-user-value">
            <p>{title}</p>
            <h3>{value}</h3>
        </div>
    )
}

const ForHire = (props) => {
    let forHire = props.forHire;
    const handleClassName =  () => {
        if(forHire){
            return(
                <div className="user-for-hire">
                    For Hire
                    <div>
                        <p className="hire-change-green">Yes</p>
                        <p className="hire-change-transparent">No</p>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="user-for-hire">
                    For Hire
                    <div>
                        <p className="hire-change-transparent">Yes</p>
                        <p className="hire-change-red">No</p>
                    </div>
                </div>
            );
        }
        
    }
    return handleClassName();
}

function UserCard(props){
    let user = props.user;
    if(user !== undefined && user !== null){
        let login = props.login;
        let name = props.fullName;
        let email = props.email;
        let bio = props.bio;
        let followers = props.followers;
        let following = props.following;
        let forHire = props.forHire;
    
        //urls for github classname
        let userUrl = props.userUrl;
        let reposUrl = props.reposUrl;
        let publicRepos = props.publicRepos;
        publicRepos = publicRepos === (1 || 0) ? publicRepos +'\nPublic Repository': publicRepos +'\nPublic Repositories'
        
        //For image
        let avatarUrl = props.avatarUrl;
        const setImageStyle = {
            backgroundImage: "url("+avatarUrl+")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }

        //for date
        let updatedAt = props.updatedAt;
        const months = ["JANUARY",
         "FEBRUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        let date = new Date(updatedAt);
        updatedAt = months[(date.getMonth())] + " " + date.getDate('dd') + ", " + date.getFullYear();
    
        return(
            <div className="UserCard" style={setImageStyle}>
                <div className="user-info">
                    <div className="user-data">
                        <img src={avatarUrl} alt="User Avatar"/>
                        <div className="user">
                            <UserInfo value={name} title="Name"/>
                            <UserInfo value={email} title="Email"/>
                            <UserInfo value={bio} title="Biography"/>
                        </div>
                    </div>
                    <div className="user-extra">
                        <div className="user-followers">
                            <p>Followers<br/>{followers}</p>
                            <p>Following<br/>{following}</p>
                        </div>
                        <ForHire forHire={forHire}/>
                    </div>
                    <div className="user-github">
                        <a href={userUrl} target="github.com">
                            <button className="btn-account">
                                <p>
                                    {login}
                                </p>
                            </button>
                        </a>
                        <a href={reposUrl} target="https://github.com">
                            <button className="btn-repository">
                                <p>
                                    {publicRepos}
                                </p>
                            </button>
                        </a>
                    </div>        
                </div>
                <div className="user-non-info">
                    <div>
                        <span>Updated Date</span>
                        <span>
                            {updatedAt}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="not-found">
                <h1>
                    User Not Found
                </h1>
            </div>
        )
    }
    
    
}

export default UserCard;