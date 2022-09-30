import { defineComponent } from "vue";
import { useAnimalResourceStore } from "@/stores/animal_resource_store";

export default defineComponent({
  setup() {
    const animalStore = useAnimalResourceStore();
    const animalList = animalStore.getAnimalList;

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
