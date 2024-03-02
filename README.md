# 3.13 Retrieve information on AWS Secret Management in the pipeline

Sample repository for assignment, a continuation of [3.12](https://github.com/nydur/serverless-cicd-feb22) (with full extended pipeline to deploy serverless)

---

## Main assignment objective

### To retrieve information using Secret Management on AWS, then get the information from the completed the pipeline job

- Steps to retrieve information listed within `secrets.yml`
- Confirm that `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` have been added to the repository secrets
- Workflow is set to run manually

```
on:
  workflow_dispatch
```

- Run job in the pipeline deployment as `get secrets` (Step 3 under the `deploy` job sequence)

```
- name: get secrets
        run: |
          aws secretsmanager get-secret-value --secret-id <Secret name>
```

- Retrieve results once the job is completed under `get secrets`, which will be listed as the `Secret key` & `Secret value` that was initially set up.

```
"SecretString": "{\"<Secret key>\":\"<Secret value>\"}",
```
