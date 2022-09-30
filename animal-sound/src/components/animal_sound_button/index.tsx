import { defineComponent, ref, watchEffect } from "vue";

export const AnimalSoundButton = defineComponent({
  props: {
    sound: {
      type: String,
      default: "",
      required: true,
    },
    silenceImg: {
      type: String,
      default: "",
      required: true,
    },
    roarImg: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    const audioElement = ref();
    const animalImg = ref();
    watchEffect(() => {
      animalImg.value = props.silenceImg;
    });

    return {
      audioElement,
      animalImg,
    };
  },
  render() {
    return (
      <div>
        <img
          src={this.animalImg}
          alt=""
          onClick={() => {
            this.audioElement.play();
            this.animalImg = this.$props.roarImg;
          }}
        />

        <audio
          src={this.$props.sound}
          ref="audioElement"
          onEnded={() => (this.animalImg = this.$props.silenceImg)}
        ></audio>
      </div>
    );
  },
});
