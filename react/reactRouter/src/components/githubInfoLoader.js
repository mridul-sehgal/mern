export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/mridul-sehgal')
    return response.json()
}