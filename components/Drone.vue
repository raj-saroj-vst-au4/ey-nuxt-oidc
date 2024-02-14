<script setup>
import { useGLTF } from "@tresjs/cientos";

const {
  scene: model,
  nodes,
  animations,
  materials,
} = await useGLTF("/models/drone/scene.gltf", { draco: true });
</script>
<template>
  <primitive :object="model" />
</template>
