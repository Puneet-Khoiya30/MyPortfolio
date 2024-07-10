var typed = new Typed(".text",{
    strings:["Frontend Developer", "Programmer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});


async function updateProfileInfo() {
    const profileInfoElement = document.getElementById('profile-info');
    try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/khoiya_puneet'); // Replace with the correct API endpoint
        const data = await response.json();
        const solvedProblems = data.totalSolved || 225;
        const ranking = data.ranking || 393605;

        profileInfoElement.textContent = `Puneet Khoiya has solved ${solvedProblems-1}+ problems on LeetCode. He has earned six badges, including the 100 Days Badge 2024 with a ranking of ${ranking}`;
    } catch (error) {
        profileInfoElement.textContent = 'Failed to load profile information.';
    }
}
async function updateProfileInfoCodechef() {
    const profileInfoElement = document.getElementById('profile-info-codechef');
    try {
        const response = await fetch('https://codechef-api.vercel.app/khoiya_puneet'); // Replace with the correct API endpoint
        const data = await response.json();
        const currentRating = data.currentRating || 997;
        const highestRating = data.highestRating || 1002;
        const stars = data.stars || 2;
        const globalRank = data.globalRank || 131956;
        const countryRank = data.countryRank || 124538;

        profileInfoElement.textContent = `I'm Puneet Khoiya, a CodeChef user from India. Currently, I have a rating of ${currentRating} with my highest being ${highestRating}. I hold a ${stars}-rank and am ranked ${globalRank} globally and ${countryRank} in India.`;
    } catch (error) {
        profileInfoElement.textContent = 'Failed to load profile information.';
    }
}

updateProfileInfo();
updateProfileInfoCodechef();

