import { Localized } from "fluent-react/compat";
import React, { FunctionComponent } from "react";
import { Field } from "react-final-form";

import { required } from "coral-framework/lib/validation";
import {
  FormField,
  HorizontalGutter,
  TextField,
  Typography,
  ValidationMessage,
} from "coral-ui/components";

import Header from "../../Header";

interface Props {
  disabled: boolean;
}

const OrganizationNameConfig: FunctionComponent<Props> = ({ disabled }) => (
  <FormField>
    <HorizontalGutter size="full">
      <Localized id="configure-organization-name">
        <Header
          container={
            <label htmlFor="configure-organization-organization.name" />
          }
        >
          Organization Name
        </Header>
      </Localized>
      <Localized
        id="configure-organization-nameExplanation"
        strong={<strong />}
      >
        <Typography variant="detail">
          Your organization name will appear on emails sent by Coral to your
          community and organization members
        </Typography>
      </Localized>
      <Field name="organization.name" validate={required}>
        {({ input, meta }) => (
          <>
            <TextField
              id={`configure-organization-${input.name}`}
              name={input.name}
              onChange={input.onChange}
              value={input.value}
              disabled={disabled}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              fullWidth
            />
            {meta.touched && (meta.error || meta.submitError) && (
              <ValidationMessage fullWidth>
                {meta.error || meta.submitError}
              </ValidationMessage>
            )}
          </>
        )}
      </Field>
    </HorizontalGutter>
  </FormField>
);

export default OrganizationNameConfig;