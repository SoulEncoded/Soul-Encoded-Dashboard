import axios from 'axios';
export const GET_REPO = 'GET_REPO';
export const GET_TABLE_OF_CONTENTS = 'GET_TABLE_OF_CONTENTS';
export const SET_CONTENT = 'SET_CONTENT';

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

export function setContent(content) {
    return {
        type: SET_CONTENT,
        content
    }
}

export function fetchTableOfContents(dispatch) {
    return axios.get("https://raw.githubusercontent.com/SoulEncoded/TableOfContents/master/README.md").then((res) => {
        dispatch(setTableOfContents(res.data));
    });
}

export function fetchContent(dispatch, repoName) {
    const url = `https://raw.githubusercontent.com/SoulEncoded/${repoName}/master/README.md`
    return axios.get(url).then((res) => {
        console.log(res.data)
        dispatch(setContent(res.data));
    })
}
