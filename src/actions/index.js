export const GET_REPO = 'GET_REPO';

export function getRepo(repoName) {
    return {
        type: 'GET_REPO',
        repoName
    }
}