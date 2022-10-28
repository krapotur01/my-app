import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "84e34d55-787f-48dd-9a3d-58ffd901ab45" },
});

export const api = {
    authMe: {
        me() {
            return instance.get(`auth/me`)
        } 
    },
    usersAPI: {
        getUsers(currentPage = 1, pageSize = 10) {
            return instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then((response) => response.data);
        },
        unfollow(userId) {
            return instance.delete(`follow/${userId}`)
        },
        follow(userId) {
            return instance.post(`follow/${userId}`, {})
        },
        getProfile(userId) {
            return instance.get(`profile/${userId}`)
          }
    }
}

// axios.create({ // с помощью метода create() и его свойств (зарезервироывнные слов baseURL и т.д.), код в сокращается, и этот метод сам подставлет необходимые значения
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {'API-KEY': '84e34d55-787f-48dd-9a3d-58ffd901ab45'}
// });

// instance.post(`follow/${userId}`, {}) //в post запросе свойства withCredentials и headers, передаются 3-м параметром в виде объекта, поэтому между URL и этим объектом, вторым параметром ставиться пустой объект
//     .then(response => if(response.data.resultCode == 0) { followed(userId) });

// тоже самое, что и:

// axios.типЗапроса('https://social-network.samuraijs.com/api/1.0/follow/${userId}',
//     {
//         withCredentials: true,
//         headers: {'API-KEY': '84e34d55-787f-48dd-9a3d-58ffd901ab45'} // в типе запроса GET передавать параметр headers['API-KEY'] не нужно
//     })
//     .then(response => if(response.data.resultCode == 0) { followed(userId) });
