const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;  // LinkedIn Access Token
const url = 'https://api.linkedin.com/v2/me';

const fetchData = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);

  // Extract the necessary data and output it for GitHub Actions
  // ... (depends on your data structure)
};

fetchData().catch(err => console.error(err));
