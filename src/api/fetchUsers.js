import axios from 'axios';

export default async function fetchUsers(url) {
    try {
        const res = await axios.get(url);
        return {
            status: 200,
            data: res.data
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}
