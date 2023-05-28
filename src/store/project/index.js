import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";

export const project = {
  state() {
    return {
      projectLoaded: null,
      projectList: [],
    };
  },
  mutations: {
    projectsLoadedStatus(state, payload) {
      state.projectLoaded = payload;
    },
  },
  actions: {
    async getProjects({ state, commit }) {
      commit("projectsLoadedStatus", false);
      const projectQuery = await query(
        collection(db, "projects"),
        orderBy("projectID", "asc")
      );
      const projectQueryResult = await getDocs(projectQuery);
      projectQueryResult.forEach((doc) => {
        if (
          !state.projectList.some((project) => project.projectID === doc.id)
        ) {
          const projectData = {
            projectID: doc.data().projectID,
            projectTitle: doc.data().projectTitle,
            projectCover: doc.data().projectCover,
            projectLink: doc.data().projectLink,
          };
          state.projectList.push(projectData);
        }
      });
      commit("projectsLoadedStatus", true);
      //console.log("projectList!!", state.projectList);
    },
  },
};
