# 3.13 Retrieve information on AWS Secret Management in the pipeline

Sample repository for assignment, a continuation of [3.12](https://github.com/nydur/serverless-cicd-feb22) (with full extended pipeline to deploy serverless)

---

## Main assignment objective

### To retrieve information using Secret Management on AWS, then get the information from the completed the pipeline job

- Pipeline step to retrieve information listed within `secrets.yml`, and the workflow is set to run manually

```
on:
  workflow_dispatch
```

- Run job in the pipeline deployment as `get secrets` (Step 3 in the under the `deploy` job)

```
- name: get secrets
        run: |
          aws secretsmanager get-secret-value --secret-id rudyn-secret-test

```

- Retrieve results once the job is completed under `get secrets`, which will be listed after `SecretString`
