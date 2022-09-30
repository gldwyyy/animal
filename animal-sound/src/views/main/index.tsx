import { defineComponent, ref, watch } from "vue";
import { AnimalSoundButton } from "@/components/animal_sound_button";
import {
  useAnimalResourceStore,
  type IAnimal,
} from "@/stores/animal_resource_store";

export default defineComponent({
  setup() {
    const animalStore = useAnimalResourceStore();
    const animal = ref<IAnimal>(animalStore.getAnimal);

    watch(
      () => animalStore.$state.curAnimal,
      () => {
        animal.value = animalStore.getAnimal;
      }
    );

    return {
      animal,
    };
  },
  render() {
    return (
      <div>
        <AnimalSoundButton
          sound={this.animal.sound}
          silenceImg={this.animal.silenceImg}
          roarImg={this.animal.roarImg}
        />
      </div>
    );
  },
});
