import { defineStore } from "pinia";
import PigSound from "@/assets/sounds/pig.mp3";
import PigSilence from "@/assets/img/pig_silence.png";
import PigRoar from "@/assets/img/pig_roar.png";
import DogSound from "@/assets/sounds/dog.mp3";
import DogSilence from "@/assets/img/dog_silence.png";
import DogRoar from "@/assets/img/dog_roar.png";

interface AnimalStoreState {
  curAnimal: EN_ANIMAL;
}

export interface IAnimal {
  sound: string;
  silenceImg: string;
  roarImg: string;
}

export enum EN_ANIMAL {
  PIG = "pig",
  DOG = " dog",
}

export const useAnimalResourceStore = defineStore({
  id: "animal-resource",
  state: (): AnimalStoreState => ({
    curAnimal: EN_ANIMAL.PIG,
  }),
  getters: {
    getAnimal(): IAnimal {
      switch (this.curAnimal) {
        case EN_ANIMAL.PIG:
          return {
            sound: PigSound,
            silenceImg: PigSilence,
            roarImg: PigRoar,
          };
        case EN_ANIMAL.DOG:
          return {
            sound: DogSound,
            silenceImg: DogSilence,
            roarImg: DogRoar,
          };
        default:
          return {
            sound: PigSound,
            silenceImg: PigSilence,
            roarImg: PigRoar,
          };
      }
    },
    getAnimalList() {
      return [
        { label: "猪", animal: EN_ANIMAL.PIG },
        { label: "狗", animal: EN_ANIMAL.DOG },
      ];
    },
  },
  actions: {
    setCurAnimal(animal: EN_ANIMAL): void {
      this.curAnimal = animal;
    },
  },
});
