import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import group from './groupsInfo.json' assert { type: 'json' };

const groupDB = group.group;

// 새로운 모임 등록하기
function allGroupResister() {
  try {
    groupDB.forEach((e) => {
      addDoc(collection(db, 'group'), {
        class: e.class,
        content: e.content,
        cost: e.cost,
        ganre: e.ganre,
        intro: e.intro,
        location: e.location,
        mood: e.mood,
        peopleMax: e.peopleMax,
        peopleMin: e.peopleMin,
        purpose: e.purpose,
        title: e.title,
        type: e.type,
        week: e.week,
        startTime: e.startTime,
        endTime: e.endTime,
        address: e.address,
        hostName: e.hostName,
        hostContent: e.hostContent,
        target: e.target,
        hostImage: e.hostImage,
        groupImage: e.groupImage,
        instagram: e.instagram,
      });
  
      console.log('모임명: ' + e.title + ' 등록 완료');

    });
  } catch {
    console.error(e);
  }

  return false;
}

allGroupResister();

