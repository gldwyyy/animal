import { defineComponent, ref } from "vue";
import { AnimalSoundButton } from "@/components/animal_sound_button";
import {
  EN_ANIMAL,
  useAnimalResourceStore,
  type IAnimal,
} from "@/stores/animal_resource_store";

export default defineComponent({
  setup() {
    const animalStore = useAnimalResourceStore();
    const animalList = [{ label: "猪", animal: EN_ANIMAL.PIG }];

    return {
      animalStore,
      animalList,
    };
  },
  render() {
    return (
      <div>
        {this.animalList.map((animal) => (
          <div onClick={() => this.animalStore.setCurAnimal(animal.animal)}>
            {animal.label}
          </div>
        ))}
      </div>
    );
  },
});
