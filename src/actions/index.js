import axios from 'axios';
export const GET_REPO = 'GET_REPO';
export const GET_TABLE_OF_CONTENTS = 'GET_TABLE_OF_CONTENTS';

function setTableOfContents(content) {
    return {
        type: GET_TABLE_OF_CONTENTS,
        content
    }
}

export function getRepo(repoName) {
    return {
        type: GET_REPO,
        repoName
    }
}

export function fetchTableOfContents(dispatch) {
    return axios.get("https://raw.githubusercontent.com/SoulEncoded/TableOfContents/master/README.md").then((res) => {
        console.log(res)
        dispatch(setTableOfContents(res.data))
    })
}
