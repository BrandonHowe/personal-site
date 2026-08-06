---
title: "How do personas interact with task utility?"
date: 2026-07-18
description: "Exploring how persona adoption changes the tasks language models prefer"
---

Does taking on a different persona cause a model to enjoy different tasks, or are utility vectors stable across personas?

Personas seem to shift task utility: telling a model that it likes cheese can cause probes to indicate a functional preference for cheese. One direction for future work is to use dimensionality reduction to map persona space and see how it evolves across layers.

## Initial replication

I replicated the main findings from [Models Have Linear Representations of What Tasks They Like](https://www.lesswrong.com/posts/pxC2RAeoBrvK8ivMf/models-have-linear-representations-of-what-tasks-they-like-1) ([paper](https://arxiv.org/pdf/2605.13339), [code](https://github.com/oscar-gilg/probing-persona-preferences)), then examined the geometry of persona space.

The Assistant Axis was a famous paper showing that personas in many different LLMs all have a dominant principal component corresponding to how much they act as an assistant. One hypothesis is that the persona space constructed from preference vectors would also organize in this assistant structure. I collected utility vectors for roughly 90 personas and inspected their geometry. The UMAP and PCA show a form of the assistant axis: rigorous problem-solving roles appear toward one end and more evil-focused roles toward the other. The PCA is harder to interpret.

![UMAP of persona preference-direction space](/images/blog/research-ideas/persona-preferences-umap.png)

The bottom left contains scientist and professional personas, the middle contains more social and creative oriented personas, and the top right contains mostly violent and evil personas. Seems to be somewhat similar to an assistant axis? But UMAP also doesn't preserve geometry.

![PCA of persona preference-direction space](/images/blog/research-ideas/persona-preferences-pca.png)

The first principal component only accounts for 9% of the variance, so it's not very strong. Nevertheless, we do see some assistant-like structure here as we go from left to right.

![Persona-by-task-topic preference heat map](/images/blog/research-ideas/persona-task-preferences.png)

Heatmap of how each persona preferred each topic category. I think there are further questions that can be asked from looking at this chart? For example, provocateur and criminal seem to have positive utility from harmful tasks and are the only two to do so. Why does this happen? Shouldn't the model always refuse these?

One limitation is that I used only the model's stated preferences. That may be problematic when a model states a preference for a harmful choice, while safety filters would presumably intervene if revealed preferences were tested instead.

This may be weak evidence that personas are less robust than expected: if they were robust, we might expect to see more structure in the geometry of personas reflected through their preferences. However, the experimental design was weak, so this conclusion is tentative.

## Future Questions

- Can we try this experiment again with revealed preferences to get a more robust answer? I used stated preferences due to a lack of compute.
- Does the faint assistant-like structure transfer to other models?