import { defineStore } from "pinia";


type SearchStoreType = {
    modelName: string,
    searchInput: string
}


export const useSearchStore = defineStore({
    id: "search",
    state: (): SearchStoreType => ({
        modelName: "TripoSR",
        searchInput: "",
    }),
    getters: {
        getModelName(): string {
            return this.modelName;
        }
    },
    actions: {
        fetchGenerate(){
            console.log(this.searchInput)
            console.log(this.modelName)
        },
        changeModel(modelName: string) {
           this.modelName = modelName;
        }
    }
})