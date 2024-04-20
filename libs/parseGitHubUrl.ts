function parseGitHubUrl(url: string | undefined) {
    console.log(url);
    // Regular expression to match different types of GitHub URLs
    const regex =
        /(?:git@github\.com:|https:\/\/github\.com\/|http:\/\/github\.com\/|github\.com\/|gh repo clone\s+)([^\/:\s]+)\/([^\/:\s]+)(?:.git|$)/;

    // Apply the regex to the provided URL
    const match = url?.match(regex);

    // Check if the URL matched the regular expression
    if (match) {
        // Extract the owner and repository name from the match
        const owner = match[1];
        const repoName = match[2];
        return { owner, repoName };
    } else {
        // Return null if the URL does not match the expected format
        return null;
    }
}

export default parseGitHubUrl;
