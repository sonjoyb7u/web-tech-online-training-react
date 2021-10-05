// Use localStorage as my DB Server for now ... 
const getLocalStorageKey = () => localStorage.getItem('enroll_course')

const updateEnrollCourseDb = enroll_course => {
    localStorage.setItem('enroll_course', JSON.stringify(enroll_course))
}

const addToDb = id => {
    // console.log(id);
    // let localStorageKeyExists = localStorage.getItem(id)
    const localStorageKeyExists = getLocalStorageKey()
    // console.log(localStorageKeyExists);
    let enroll_course_obj = {}
    if(localStorageKeyExists === null) {
        // localStorage.setItem(id, 1)
        enroll_course_obj[id] = 1
    }
    else {
        enroll_course_obj = JSON.parse(localStorageKeyExists) // convert JSON object to js object ...
        if(enroll_course_obj[id]) {
            const addNewQuantity = enroll_course_obj[id] + 1
             enroll_course_obj[id] = addNewQuantity
        }
        else {
            enroll_course_obj[id] = 1
        }
    }
    updateEnrollCourseDb(enroll_course_obj)
    
}

const removeFromDb = (id) => {
    const localStorageKeyExists = getLocalStorageKey()
    let enroll_course_obj = {}
    if(localStorageKeyExists) {
        enroll_course_obj = JSON.parse(localStorageKeyExists)
        delete enroll_course_obj[id]
        updateEnrollCourseDb(enroll_course_obj)
    }
}

const getEnrollCourseFromLocalStorageDb = () => {
  const localStorageKeyExists = getLocalStorageKey();
  return localStorageKeyExists ? JSON.parse(localStorageKeyExists) : {};
}

const clearEnrollCourse = () => {
    localStorage.removeItem('enroll_course')
}

export {addToDb, removeFromDb, getEnrollCourseFromLocalStorageDb, clearEnrollCourse}