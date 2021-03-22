import { useState, useEffect } from 'react';
import SearchForm from './home_components/SearchForm';
import UserCard from './home_components/UserCard';


function Home(){
    let [name, setName] = useState('example'); //login for search
    let [user, setUser] = useState([]);
    //user data
    let [forHire, setForHire] = useState(false);
    let [login, setLogin] = useState('example');
    let [fullName, setFullName] = useState('example');
    let [avatarUrl, setAvatrUrl] = useState("https://avatars.githubusercontent.com/u/57936?v=4");
    let [email, setEmail] = useState('Nothing to see here.');
    let [bio, setBio] = useState('This User did not provide anything.r');
    let [followers, setFollowers] = useState(0);
    let [following, setFollowing] = useState(0);
    let [userUrl, setUserUrl] = useState('https://github.com');
    let [reposUrl, setReposUrl] = useState(userUrl);
    let [publicRepos, setPublicRepos] = useState(0);
    let [updatedAt, setUpdatedAt] = useState([]);

    
    //this effect will set my user data once the user data changes
    useEffect(() => {
        setForHire((user.hireable === undefined || user.hireable===null) ? false : true);
        setLogin(user.login === null ? 'Something went wrong' : user.login);
        setAvatrUrl(user.imageUrl === null ? "https://avatars.githubusercontent.com/u/57936?v=4" : user.avatar_url);
        setEmail( user.email === null ? 'Private.' : user.email);
        setBio(user.bio === null ? 'This User did not provide anything.' : user.bio);
        setFollowers(user.followers === (null || undefined) ? 0 : user.followers);
        setFollowing(user.following === (null || undefined) ? 0 : user.following);
        setUserUrl(user.html_url === null ? 'https://github.com' : user.html_url);
        setPublicRepos(user.public_repos === null ? 0 : user.public_repos);
        setUpdatedAt(user.updated_at);
        console.log(user);
    }, [user])


    //this effect will run once the name is changed.
    useEffect(() => {
        fetchGitUsers();
    },[name]);

    //this effect will run once the login changes and sets the fullname data
    useEffect(() => {
        console.log("User Name: " + login);
        setFullName(user.name === null ? user.login : user.name);
    }, [login]);

    //this effect will check if the fullname changes once the login changes
    useEffect(() => {
        console.log("Name: " + fullName);
    }, [fullName]);

    //effect that will log the avatar's url;
    useEffect(() => {
        console.log("AvatarUrl: " + avatarUrl);
    }, [avatarUrl]);

    //effect that will log the email;
    useEffect(() => {
        console.log("Email: " + email);
    }, [email]);
    
    //effect will log the bio once the value changed.
    useEffect(() => {
        console.log("Bio: " + bio);
    }, [bio]);

    //effect rans once follower changes
    useEffect(() => {
        console.log("Followers: " + followers);
    }, [followers]);

    //effect rans once following changes
    useEffect(() => {
        console.log("Following: " + following);
    }, [following]);
    
    //effect runs once forHire changes
    useEffect(() => {
        console.log("For Hire: " + forHire);
    }, [forHire]);

    //this effect ran once userUrl changes and sets the value of reposUrl
    useEffect(() => {
        console.log("User url: " + userUrl);
        setReposUrl(userUrl + "?tab=repositories");
    }, [userUrl]);

    //effect that rans once publicRepos changes
    useEffect(() => {
        console.log("Public Repositories: " + publicRepos);
    }, [publicRepos]);

    //effect for date updated
    useEffect(() => {
        console.log("Updated At: " + updatedAt);
    }, [updatedAt]);

    //fetchGitUsers will set the data of setUser state
    const fetchGitUsers = async () => {
        let response = await fetch(
            `https://api.github.com/users/${name}`
        );

        if(response.ok === true){
            let json = await response.json();
            setUser(json);
        }
        else{
            let stat = await response.status;
            if(stat === 404){
                console.log('Handle your own 404. :)');
                return;
            }
        }
    }

    return(
        <div className="Home">
            <div className="content">
                <SearchForm
                    setName={setName}
                />
                <UserCard
                    user={user}
                    forHire={forHire}
                    fullName={fullName}
                    login={login}
                    avatarUrl={avatarUrl}
                    email={email}
                    bio={bio}
                    followers={followers}
                    following={following}
                    userUrl={userUrl}
                    reposUrl={reposUrl}
                    publicRepos={publicRepos}
                    updatedAt={updatedAt}
                />
            </div>
        </div>
    );
}

export default Home;